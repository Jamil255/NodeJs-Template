/* eslint-disable prettier/prettier */
import { ApiError } from '../../helpers/apiResponse';

export const hello = async (req, res) => {
    try {
        return res.status(200).json({ message: 'listing..................' });
    } catch (error) {
        throw new ApiError(500, error?.message);
    }
};
