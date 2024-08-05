import { useParams } from "react-router-dom";
const content = () => {
  const { contentID } = useParams<{ contentID: string }>();
  console.log(useParams());
  return <div>Content ID : {contentID}</div>;
};

export default content;
