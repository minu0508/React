import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
        /**
         * [preventDefault()]
         * : Form 제출 시 Page가 새로 고침되는 것이 기본 동작.
         * 하지만 이 메소드를 호출하여 새로 고침을 막고, alert 창을 띄운다.
         * 새로 고침을 막음으로써 사용자가 입력한 정보가 사라지지 않고 유지된다.
         */

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;