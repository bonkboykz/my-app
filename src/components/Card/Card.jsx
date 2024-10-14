import "./Card.css";

export const Card = ({
  title,
  description,
  cover,
  userProgress = 0,
  maxProgress = 0,
}) => {
  return (
    <div className="Card">
      <div>
        <img src={cover} alt={title}></img>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>

        <div>
          {userProgress} / {maxProgress}
        </div>
      </div>
    </div>
  );
};
