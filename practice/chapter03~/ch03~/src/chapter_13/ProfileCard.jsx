import Card from "./Card";

function ProfileCard(props) {
    return (
        // Card Component 사용하여 Title에 이름 넣고, BackgroundColor에 색을 설정.
        <Card title="Name" backgroundColor="#4ea04e">
            {/* children이 되는 부분 */}
            <p>리액트 Chapter13</p>
            <p>리액트를 사용하여 개발 연습을 하고 있습니다.</p>
        </Card>
    )
}

export default ProfileCard;