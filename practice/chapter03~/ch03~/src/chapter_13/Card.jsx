function Card(props) {
    const { title, backgroundColor, children } = props;

    // title과 backgroudColor를 사용한 부분: Specialization
    // children을 사용한 부분: Containment

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;