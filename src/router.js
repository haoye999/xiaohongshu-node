const Router = require('koa-router');
const { getHomeFeed } = require('./apis');

const router = new Router();

router.get('/api/homefeed/notes', async (ctx) => {
  const data = await getHomeFeed(ctx.query);
  ctx.body = data;
});

router.get('/about', (ctx) => {
  ctx.body = 'about';
});

module.exports = router;
