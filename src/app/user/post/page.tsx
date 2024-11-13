'use client';
import React, { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Fullname: '',
        Password: '',
        Pfp: '',
        Uid: '',
        Username: '',
        isBanned: false,
        isPrivate: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFormData({
                Email: '',
                Fullname: '',
                Password: '',
                Pfp: '',
                Uid: '',
                Username: '',
                isBanned: false,
                isPrivate: false,
            });

            alert("Account created successfully!");
        } catch (error) {
            console.error('Failed to submit data:', error);
        }
    };

    return (
        <div className="p-5">
            <div>Create user</div>
            <form
                className="flex flex-col gap-2 w-full max-w-[500px] bg-gray-100 p-5 rounded text-black"
                onSubmit={handleSubmit}
            >
                <div className="flex gap-2">
                    <label>Email:</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex gap-2">
                    <label>Fullname:</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="text"
                        name="Fullname"
                        value={formData.Fullname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex gap-2">
                    <label>Password:</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex gap-2">
                    <label>Pfp (Profile Picture URL):</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="text"
                        name="Pfp"
                        value={formData.Pfp}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex gap-2">
                    <label>UID:</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="text"
                        name="Uid"
                        value={formData.Uid}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex gap-2">
                    <label>Username:</label>
                    <input
                        className="text-white bg-[#222] rounded-md"
                        type="text"
                        name="Username"
                        value={formData.Username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex gap-2">
                    <label>
                        Is Banned:
                        <input
                            type="checkbox"
                            name="isBanned"
                            checked={formData.isBanned}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex gap-2">
                    <label>
                        Is Private:
                        <input
                            type="checkbox"
                            name="isPrivate"
                            checked={formData.isPrivate}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button
                    className="bg-blue-500 text-white p-2 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;
