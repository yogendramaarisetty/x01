
import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/joy";

import { useParams } from "react-router-dom";
import SplitPane, { Pane } from "react-split-pane";
import './assets/Split.css'
import CodeEditor from "./CodeEditor";
import Tooltip from '@mui/joy/Tooltip';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import JudgeService from "./service";
import QuestionService from "./questionService";
import Card from '@mui/joy/Card';


const service = new JudgeService(
    "cf4305d31bmsh82518687544739ep179fd2jsnf6d65d6ee270"
);
const questionService = new QuestionService();

const TestQuestion = ({ updateQuestionDetails }) => {
    var initialCodes = codesByLanguage;
    var codesFromLocalStore = JSON.parse(localStorage.getItem("codes"));
    if (codesFromLocalStore) {
        initialCodes = codesFromLocalStore;
    }
    const [codes, setCodes] = useState(initialCodes);
    const [language, setLanguage] = useState("python");
    const [output, setOutput] = useState("");


    const { questionId } = useParams();
    const [questionDetails, setQuestionDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch and update question details when the component mounts
        const fetchQuestionDetails = async () => {
            try {

                // Find the question by question_id
                const foundQuestion = questionService.getQuestionById(questionId);

                // Update question details
                setQuestionDetails(foundQuestion);
                updateQuestionDetails(foundQuestion);
            } catch (error) {
                console.error("Error fetching question details:", error);
            }
        };

        fetchQuestionDetails();
    }, [questionId, updateQuestionDetails]);

    const handleRunClick = (language, code) => {
        // Run the code
        setLoading(true);

        service.submitCode(language, code).then((data) => {
            setLoading(false);
            console.log(data);
            var status = data.status.description;
            if (status === "Accepted") {
                setOutput(data.stdout);
            } else {
                if (status === "Compilation Error") {
                    setOutput(`${status}\n ${data.compile_output}`);
                } else {
                    setOutput(`${status}\n ${data.stderr} \n ${data.stdout}`);
                }
            }
        });
    };
    const handleSubmitClick = () => {
        // Submit the code
    };

    return (
        <Box className="BaseContainer"
            sx={{ display: "flex", position: "relative", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <SplitPane split="vertical">

                <Box className="LeftPane" sx={{ height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Card className="FillCard" />
                </Box>

                <Box className="RightPane" sx={{ height: '100%' }}>
                    <SplitPane split="horizontal">
                        <Pane minSize="10%" className="TopRightPane">
                        <CodeEditor
                            codes={codes}
                            setCodes={setCodes}
                            language={language}
                            setLanguage={setLanguage}
                        />
                        </Pane>
                        <Pane className="BottomRightPane">
                            <Box className="ConsoleTbs">
                                <Tooltip title="Run Code" arrow>
                                    <Stack spacing={2} direction="row">
                                        <Button
                                            onClick={() =>
                                                handleRunClick(
                                                    languageIds[language],
                                                    codes[language]["code"]
                                                )}
                                            loading={loading}
                                            size="sm"
                                            variant="soft"
                                            endDecorator={<FontAwesomeIcon icon={faPlayCircle} />}
                                            loadingPosition="end">
                                            Run
                                        </Button>
                                        <Button color="success" loadingPosition="end" >
                                            Submit
                                        </Button>
                                    </Stack>
                                </Tooltip>
                            </Box>
                        </Pane>
                    </SplitPane>
                </Box>
            </SplitPane>
        </Box>
    );
};

const codesByLanguage = {
    python: {
        code: "print('Hello, Worlds!')\n# This is a Python sample code snippet.",
    },
    java: {
        code: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
    },
    csharp: {
        code: "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine('Hello, World!');\n    }\n}",
    },
    cpp: {
        code: "#include <iostream>\n\nint main() {\n    std::cout << 'Hello, World!' << std::endl;\n    return 0;\n}",
    },
    c: {
        code: "#include <stdio.h>\n\nint main() {\n    printf('Hello, World!\\n');\n    return 0;\n}",
    },
};
const languageIds = {
    python: 71,
    java: 91,
    cpp: 54,
    c: 50,
    csharp: 51,
};
export default TestQuestion;
