import { useState } from "react";
import { useForm } from "react-hook-form";

const Authentication = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (

        <form className='login' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

            <input {...register("username")} placeholder="Username:" />
            <input {...register("password")} placeholder="Password:" />

            <input className='submit' type="submit" />
        </form>
    )
}

export default Authentication