
import bcrypt from 'bcryptjs';

export default async function hashInput(str:string){

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(str, salt);

    return hashedPassword;


}