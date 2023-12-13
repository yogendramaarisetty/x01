import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box } from "@mui/system";
import DarkModeToggle from "./DarkModeToggle";
//import constrainedEditor from "constrained-editor-plugin";

export default function CodeEditor({ codes, setCodes, language, setLanguage }) {
  const languages = ["python", "c", "cpp", "java", "csharp"];
  const [theme, setTheme] = useState("vs-dark");
  const [isDarkMode, setIsDarkMode] = useState(false);
  // let restrictions = [];

  const editorRef = useRef(null);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  function handleOnMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleCodeChange = (newValue, e) => {
    const updatedCodes = JSON.parse(JSON.stringify(codes));
    updatedCodes[language]["code"] = newValue;
    setCodes(updatedCodes);
    localStorage.setItem("codes", JSON.stringify(updatedCodes));
  };

  const handleModeChange = () => {
    console.log(isDarkMode);
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "vs-dark" : "vs");
  };

  return (
    <Box className="code-container" sx={{ display:"flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <div className="toolbar">
        <select value={language} onChange={handleLanguageChange}>
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
        <DarkModeToggle
          onChange={handleModeChange}
          toggleText={!isDarkMode ? "Light Mode" : "Dark Mode"}
        />
      </div>
      <div className="editor">
        <Editor
          language={language}
          value={codes[language]["code"]}
          onChange={handleCodeChange}
          theme={theme}
          onMount={handleOnMount}
        />
      </div>
    </Box>
  );
}
