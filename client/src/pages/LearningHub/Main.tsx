// Desc: Main page of the Learning Hub

import { Card, CardContent } from "@mui/material";

const Main = () => {
  return (
    <>
      <Card>
        <CardContent>
          <h1 className="text-4xl font-semibold mb-12">
            Learning <span className="text-green-800">Hub</span>
          </h1>
          <p>
            This is the main page of the Learning Hub. Here you can find the
            syllabus for the course you are enrolled in.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
