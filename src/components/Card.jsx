function Card({ title, description, technology }) {
    return (
        <div className="card">
            <h2>{title}</h2>

            <p>{description}</p>

            <p>
                <strong>Technology:</strong> {technology}
            </p>
        </div>
    );
}

export default Card;