import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import RadioButton from "../../generic/UserInputs/RadioButton";
import EyeVisible from "../../graphics/EyeVisible";

import {
  WindowsContainer,
  WindowsLayout,
  Window,
  WindowHeader,
  WindowContent,
} from "../../generic/Window";
import { clearHTML } from "../../../utils/html";
import { decodeBase64 } from "../../../utils/utils";

import "./Qcm.css";

export default function QCM({ userSettings }) {
  const settings = userSettings();

  const navigate = useNavigate();
  const { fetchForms } = useContext(AppContext);
  const [selectedform, setselectedform] = useState(null);
  const [forms, setForms] = useState([]);
  useEffect(() => {
    if (location.hash !== "") {
      setselectedform(
        forms.filter(
          (e) => e.formulaire.id === parseInt(location.hash.slice(1))
        )[0] ?? null
      );
    }
  }, []);
  const controller = new AbortController();
  fetchForms(controller).then((val) => {
    setForms(val);
  });
  const handleSelection = (evt, key) => {
    setselectedform(
      forms.filter(
        (e) => e.formulaire.id === parseInt(location.hash.slice(1))
      )[0] ?? null
    );
    navigate("#" + key);
  };
  return (
    <section id="forms-main">
      <WindowsContainer name="forms">
        <WindowsLayout>
          <Window className="form-list" allowFullscreen={true} growthFactor={1}>
            <WindowHeader className="forms-window-header">
              <h2>Formulaires</h2>
            </WindowHeader>
            <WindowContent>
              {forms.length === 0 ? (
                <p className="no-form-placeholder">
                  Vous n'avez aucun formulaire à compléter
                </p>
              ) : (
                forms.map((e) => (
                  <li
                    className="form"
                    onClick={(event) =>
                      handleSelection(event, e.formulaire.id)
                    }>
                    <span className="form-title" key={e.formulaire.id}>
                      {e.formulaire.titre}
                    </span>
                    {e.fini !== "" ? (
                      <EyeVisible className="eye-icon" />
                    ) : (
                      <></>
                    )}
                    <p>
                      {new Date(e.formulaire.created).toLocaleDateString(
                        "fr-FR",
                        {
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                  </li>
                ))
              )}
            </WindowContent>
          </Window>
          <Window
            className="form-content"
            growthFactor={3}
            allowFullscreen={true}>
            <WindowHeader className="form-reader-window-header">
              <h2>Formulaire</h2>
            </WindowHeader>
            <WindowContent className="form-reader-window-content">
              {selectedform === null ? (
                <p className="no-form-placeholder">
                  Sélectionnez un formulaire pour le visualiser ici
                </p>
              ) : (
                <div className="form-body">
                  <h1 className="form-body-title">
                    {!settings.get("isStreamerModeEnabled")
                      ? selectedform.formulaire.titre
                      : selectedform.formulaire.titre
                          .split("")
                          .map((e, i) =>
                            i < 5 || e === " " ? (
                              <span>{e}</span>
                            ) : (
                              <strong>-</strong>
                            )
                          )}
                  </h1>
                  <p
                    className="form-subtitle"
                    dangerouslySetInnerHTML={{
                      __html: clearHTML(
                        !settings.get("isStreamerModeEnabled")
                          ? decodeBase64(selectedform.formulaire.introduction)
                          : decodeBase64(selectedform.formulaire.introduction)
                              .split("")
                              .map((e, i) =>
                                i < 7 || e === " " ? (
                                  <span>{e}</span>
                                ) : (
                                  <span>-</span>
                                )
                              )
                      ),
                    }}>
                    {/* {!settings.get("isStreamerModeEnabled")
                      ? atob(selectedform.formulaire.introduction)
                      : atob(selectedform.formulaire.introduction)
                          .replace(/<[^>]+>/g, "")
                          .split("")
                          .map((e, i) =>
                            i < 7 || e === " " ? (
                              <span>{e}</span>
                            ) : (
                              <span>-</span>
                            )
                          )} */}
                  </p>
                  {selectedform.questions.map((question) => (
                    <div className="question" key={question.id}>
                      <h4 className="question-title">
                        {settings.get("isStreamerModeEnabled")
                          ? decodeBase64(question.question)
                              .split("")
                              .map((e, i) =>
                                i < 5 || e === " " ? (
                                  <span>{e}</span>
                                ) : (
                                  <strong>-</strong>
                                )
                              )
                          : decodeBase64(question.question)}
                      </h4>
                      {question.typeQ === "radio" ? (
                        <div className="question-propositions">
                          {question.propositions.map((proposition) => (
                            <div
                              className="question-proposition"
                              key={proposition.id}>
                              <RadioButton
                                children={atob(proposition.enonce)}
                                value={proposition.id}
                                id={proposition.id}
                                name={"proposition-" + question.id}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </WindowContent>
          </Window>
        </WindowsLayout>
      </WindowsContainer>
    </section>
  );
}
