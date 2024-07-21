import jwt from "jsonwebtoken";

export default function createJwtToken(email:string){

    const token={
        email:email
    }

    const jwttoken =  jwt.sign(token, process.env.TOKEN_SECRET!, { expiresIn: "1h" });

    return jwttoken;
}