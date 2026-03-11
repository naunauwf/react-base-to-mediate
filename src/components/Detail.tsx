import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Item #{id}</h1>
    </div>
  );
};

export default Detail;
