export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>',
  },
};

/** Ambiente de Distribuição:
 *  - Amazon SES
 *  - Mailgun
 *  - Sparkpost
 *  - Mandril (Apenas com mailchimp)
 */

/** Ambiente de DEV:
 *  - Mailtrap.io
 */
