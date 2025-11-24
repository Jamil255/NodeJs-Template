import { check } from 'express-validator';
import { startCase } from 'lodash';

/* helper functions */
import translate from '../helpers/translate';

export function validate({ field, values, min = 2, max = 100, isRequired = true }) {
    switch (field) {
        case 'email': {
            const rule = check(field);
            if (!isRequired) {
                rule.optional({ checkFalsy: true });
            } else {
                rule.not()
                    .isEmpty()
                    .withMessage(
                        translate('validations', 'required', {
                            ':attribute': startCase(field),
                        }),
                    );
            }
            rule.isEmail().withMessage(
                translate('validations', 'valid', {
                    ':attribute': startCase(field),
                }),
            );
            return rule;
        }
        case 'password':
        case 'name':
        case 'username': {
            return check(field)
                .not()
                .isEmpty()
                .withMessage(
                    translate('validations', 'required', {
                        ':attribute': startCase(field),
                    }),
                )
                .isLength({ min, max })
                .withMessage(
                    translate('validatuons', 'length', {
                        ':attribute': startCase(field),
                        ':min': min,
                        ':max': max,
                    }),
                );
        }
        case 'roleTitle': {
            return check(field)
                .not()
                .isEmpty()
                .withMessage(
                    translate('validations', 'required', {
                        ':attribute': startCase(field),
                    }),
                )
                .isIn(values)
                .withMessage(
                    translate('validations', 'invalidEnum', {
                        ':attribute': startCase(field),
                        ':values': values.join(',  '),
                    }),
                );
        }
        default:
            return undefined;
    }
}
