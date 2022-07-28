module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b58f81ed0387c681910927ea4fc99c22'),
  },
});
