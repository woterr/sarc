function Info({ title, description }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="container__data">
            <h1 class="heading heading-err">{title}</h1>
            <p class="description">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
