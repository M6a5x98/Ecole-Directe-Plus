
import { useState, createContext, useContext, forwardRef, isValidElement, cloneElement } from "react";
import {
    useFloating,
    useHover,
    useFocus,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    useTransitionStyles,
    autoUpdate,
    offset,
    flip,
    shift,
    safePolygon,
    useMergeRefs,
    FloatingPortal
} from '@floating-ui/react';
// Check out the FloatingUI docs for more information : https://floating-ui.com/docs/react

import './Tooltip.css'



function useTooltip({ ...options }) {
    // available options:
    // isOpen (bool) ; placement (str: "top" ; "right" ; ...) ; animationDuration (int: ms) ; delay (int: ms) ;
    // restDuration (int: ms) ; restFallbackDuration (int: ms) ; disableSafePolygon (bool)
    // disableHover (bool) ; disableFocus (bool) ; disableClick (bool) ; disableDismiss (bool)

    const [isOpen, setIsOpen] = useState(options.isOpen ?? false);

    // - - Floating properties - -
    const data = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        // AutoUpdate position :
        // whileElementsMounted(...args) {
        //     const cleanup = autoUpdate(...args, {animationFrame: true});
        //     // Important! Always return the cleanup function.
        //     return cleanup;
        // },
        placement: (options.placement ?? "top"),
        middleware: [offset(10), flip(), shift({ padding: 10 })],
    });

    const context = data.context;

    // - - Interactions - -
    const hover = useHover(context, {
        enabled: (options.disableHover ?? true),
        restMs: (options.restDuration ?? 0),
        delay: (options.restDuration ? {open: options.restFallbackDuration} : (options.delay ?? 0)),
        handleClose: ((options.disableSafePolygon === undefined || options.disableSafePolygon) ? safePolygon() : null)
    });

    const focus = useFocus(context, {
        enabled: (options.disableFocus ?? true)
    });

    const click = useClick(context, {
        enabled: (options.disableClick ?? false)
    });

    const dismiss = useDismiss(context, {
        enabled: (options.disableDismiss ?? true),
        outsidePressEvent: 'click'
    });

    const role = useRole(context, {
        role: "tooltip"
    });

    const interactions = useInteractions([
        hover,
        focus,
        click,
        dismiss,
        role
    ]);

    // - - Transitions - -
    const transition = useTransitionStyles(context, {
        duration: (options.animationDuraction ?? 250),

        initial: ({ side }) => ({
            opacity: 0,
            translate: side === 'top'
                ? "0px 8px"
                : "0px -8px",
        }),

        open: {
            opacity: 1,
            translate: "none",
        },
    });

    return ({
        isOpen,
        setIsOpen,
        ...interactions,
        ...transition,
        ...data
    })
}

const TooltipContext = createContext(null);

function useTooltipContext() {
    // Fonction sécurisée pour récupérer le context
    const context = useContext(TooltipContext);

    if (context === null) {
        throw new Error("TooltipTrigger or TooltipContent components must be wrapped in <Tooltip />");
    }

    return context;
};

export function Tooltip({ children, className="", id="", ...options }) {
    const tooltip = useTooltip(options)

    return (
        <div className={`tooltip ${className}`} id={id}>
            <TooltipContext.Provider value={tooltip}>
                {children}
            </TooltipContext.Provider>
        </div>
    )
}

export const TooltipTrigger = forwardRef(function TooltipTrigger({ children, ...props }, propRef) {
    const context = useTooltipContext();

    const ref = useMergeRefs([context.refs.setReference, children.ref, propRef]);

    // Si children est un composant, on lui rajoute les props 
    if (isValidElement(children)) {
        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                tabIndex: 0,
                // on peut styliser le composant en fonction de l'état
                "data-state": context.isOpen ? "open" : "closed"
            })
        );
    }

    // Si children n'est pas un composant (ex : texte), on le met dans une div et applique les props
    return (
        <div
            ref={ref}
            // on peut styliser le composant en fonction de l'état
            data-state={context.isOpen ? "open" : "closed"}
            {...context.getReferenceProps(props)}
            tabIndex="0"
        >
            {children}
        </div>
    );
});

export const TooltipContent = forwardRef(function TooltipContent({ children, style, className="", ...props }, propRef) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, children.ref, propRef]);

    // Affiche / N'affiche pas la tooltip
    if (!context.isMounted) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                className={`tooltip-content ${className}`}
                style={{
                    ...context.floatingStyles,
                    ...context.styles,
                    ...style
                }}
                {...context.getFloatingProps(props)}
            >
                {children}
            </div>
        </FloatingPortal>
    )
});
