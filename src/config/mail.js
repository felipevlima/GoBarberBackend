export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '34878641284765',
    pass: '8f83c4951d3d55',
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
