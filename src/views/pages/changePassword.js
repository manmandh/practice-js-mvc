const changePassword = () => {
    return `
        <div id="box">
            <form>
                <h1>Change Password <span>choose a good one!</span></h1>
            <form>
                <p>
                    <input type="password" value="" placeholder="Enter Password" id="p" class="password">
                </p>
                <p>     
                    <input type="password" value="" placeholder="Confirm Password" id="p-c" class="password">
                    <div id="strong"><span></span></div>
                    <div id="valid"></div>
                    <small>Minimum 8 characters with at least one uppercase, one lowercase,one special character and a number</small>
                </p>
                <button>Submit</button>
            </form>
        </div>
    `;
}
export default changePassword