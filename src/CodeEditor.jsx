import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box } from "@mui/system";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import DarkModeToggle from "./DarkModeToggle";
import { Card, CardOverflow, CardContent } from "@mui/joy";
//import constrainedEditor from "constrained-editor-plugin";

export default function CodeEditor({ codes, setCodes, language, setLanguage }) {
  const languages = ["python", "c", "cpp", "java", "csharp"];
  const [theme, setTheme] = useState("vs-dark");
  const [isDarkMode, setIsDarkMode] = useState(false);
  // let restrictions = [];

  const editorRef = useRef(null);

  const handleLanguageChange = (event, newValue) => {
    setLanguage(newValue);
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
  const handleChange = (event, newValue) => {
    alert(`You chose "${newValue}"`);
  };
  return (
    <Box className="code-container" sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <Card variant="outlined" className="FillCard">
        <CardOverflow>
          <Box className="toolbar" sx={{ display: "flex" }}>
            <Select
              variant="plain"
              value={language}
              placeholder="Select a lang"
              onChange={handleLanguageChange}
              size="sm"
              sx={{ minWidth: 100 }}
            >
              {languages.map((language) => (
                <Option key={language} value={language}>{language}</Option>
              ))}
            </Select>

            <DarkModeToggle
              onChange={handleModeChange}
              toggleText={!isDarkMode ? "Light Mode" : "Dark Mode"}
            />
          </Box>
        </CardOverflow>

          <Box className="Editor" sx={{ flex: 1, overflow: "auto" }}>
            <Editor
              language={language}
              value={codes[language]["code"]}
              onChange={handleCodeChange}
              theme={theme}
              onMount={handleOnMount}
            />
          </Box>
      </Card>
    </Box>
  );
}
