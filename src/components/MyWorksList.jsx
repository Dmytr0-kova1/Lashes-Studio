import myWorks1 from "../img/myWorks/myWorks-1.jpg";
import myWorks2 from "../img/myWorks/myWorks-2.jpg";
import myWorks3 from "../img/myWorks/myWorks-3.jpg";
import myWorks4 from "../img/myWorks/myWorks-4.jpg";
import myWorks5 from "../img/myWorks/myWorks-5.jpg";
import myWorks6 from "../img/myWorks/myWorks-6.jpg";

const MyWorksList = () => {
  const images = [myWorks1, myWorks2, myWorks3, myWorks4, myWorks5, myWorks6];

  return (
    <section>
      <h2>My Works</h2>
      <ul>
        {images.map((img, index) => (
          <li key={index}>
            <img
              src={img}
              alt={`eyelash extensions ${index + 1}`}
              width="200"
              height="200"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyWorksList;
