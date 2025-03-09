import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Email validation function
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSignIn = async () => {
        if (!email || !password) {
            setErrorMessage("Email and password are required.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setErrorMessage("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/signin", { // ✅ Fixed API URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                throw new Error("Invalid server response.");
            }

            if (!response.ok) {
                throw new Error(data.message || "Login failed. Please try again.");
            }

            if (data.token) {
                localStorage.setItem("token", data.token);
                alert("Login Successful!");
                navigate("/");
            } else {
                setErrorMessage("Login Failed: " + data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #4facfe, #00f2fe)" }}>
            <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}>
                <h2 className="text-center mb-4 text-primary">Sign In</h2>

                {errorMessage && <div className="alert alert-danger text-center mb-3">{errorMessage}</div>}

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <button className="btn btn-primary w-100 mb-2" onClick={handleSignIn} disabled={isLoading}>
                    {isLoading ? "Signing In..." : "Sign In"}
                </button>

                <div className="text-center mt-3">
                    <small>Don't have an account? <a href="/signup" className="text-primary">Sign up</a></small>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
