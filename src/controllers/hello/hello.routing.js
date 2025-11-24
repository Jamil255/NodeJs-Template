import { asyncHandler } from '../../middlewares/asyncHandler';
import validationResponse from '../../middlewares/validation-response';
import { validate } from '../../validators/auth';
import { hello } from './hi.action';
import { list } from './list.action';

module.exports = {
    '/': {
        get: {
            middlewares: [
                validate({
                    field: 'email',
                    values: ['found', 'missing'],
                }),
                validate({ field: 'password', values: ['found', 'missing'] }),
                validate({ field: 'name', isRequired: true }),
                validationResponse,
            ],

            action: asyncHandler(list),
        },
    },
    '/hi': {
        get: {
            action: asyncHandler(hello),
        },
    },
};
