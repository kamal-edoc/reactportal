function CoreConcepts({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}


export default CoreConcepts;
