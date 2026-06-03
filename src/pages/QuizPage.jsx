import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import AdSlot from "../components/AdSlot";

export default function QuizPage() {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/quizzes/1/"
      );

      setQuiz(response.data);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionId, choiceId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  if (loading) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h2 className="text-2xl">Loading...</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">
        
        <div className="panel p-6 rounded-lg shadow">
          <h1 className="text-4xl font-bold mb-4">
            {quiz?.title}
          </h1>

          <p className="mb-6 text-gray-500">
            {quiz?.description}
          </p>

          <div className="space-y-8">
            {quiz?.questions?.map((question, index) => (
              <div
                key={question.id}
                className="border p-4 rounded-lg"
              >
                <h2 className="font-semibold text-lg mb-4">
                  {index + 1}. {question.question_text}
                </h2>

                <div className="space-y-3">
                  {question.choices.map((choice) => (
                    <label
                      key={choice.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={choice.id}
                        checked={
                          selectedAnswers[question.id] === choice.id
                        }
                        onChange={() =>
                          handleAnswerSelect(
                            question.id,
                            choice.id
                          )
                        }
                      />

                      <span>{choice.choice_text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-8 bg-blue-600 text-white px-6 py-2 rounded"
            onClick={() =>
              console.log(selectedAnswers)
            }
          >
            Submit Quiz
          </button>
        </div>

        <AdSlot label="Sidebar Ad" />
      </div>
    </Container>
  );
}






// import { useEffect, useState } from 'react';
// import { getRandomQuote } from '../lib/api';
// import Container from '../components/Container';
// import AdSlot from '../components/AdSlot';
// import axios from 'axios';

// export default function QuizPage() {

//   return (
//     <Container>
//       <div className="grid gap-6 py-20 lg:grid-cols-2">
//         <div className="panel">
//           <h1 className="text-4xl font-bold">Quiz</h1>

          
//         </div>

//         <AdSlot label="Sidebar Ad" />
//       </div>
//     </Container>
//   );
// }
