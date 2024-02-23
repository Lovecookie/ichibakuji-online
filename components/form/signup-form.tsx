import DefaultInput from "../input/default-input";
import DefaultLabel from "../input/default-label";

export default function SignupForm() {
    return (
        <div className="p-8 bg-white bg-opacity-60 rounded-lg shadow-md max-w-sm w-full">
            <form>
                <div className="mb-4 bg-center flex justify-center items-center">
                    <h1 style={{ fontFamily: "NanumSquare", fontSize: "32px", color: "blue" }}>Sign Up</h1>
                </div>
                <div className="mb-4">
                    <DefaultLabel htmlFor="email" labelName="Email" />
                    <DefaultInput type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <DefaultLabel htmlFor="nickname" labelName="NickName" />
                    <DefaultInput type="nickname" id="nickname" name="nickname" placeholder="Enter your nickname" />
                </div>
                <div className="mb-6">
                    <DefaultLabel htmlFor="password" labelName="Password" />
                    <DefaultInput type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="mb-6">
                    <DefaultLabel htmlFor="password" labelName="Confirm password" />
                    <DefaultInput
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-10"></div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-auto"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
