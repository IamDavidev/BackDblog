module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f7e3de74ad81798247ec3ae9b215c2bd'),
  },
});
