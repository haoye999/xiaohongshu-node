const Router = require('koa-router');
const { getHomeFeed, getNoteDetail } = require('./apis');

const router = new Router();

router.get('/api/homefeed/notes', async (ctx) => {
  const data = await getHomeFeed(ctx.query);
  ctx.body = data;
});

router.get('/api/note/:id', async (ctx) => {
  const data = await getNoteDetail(ctx.params.id);
  ctx.body = data;
});

router.get('/about', (ctx) => {
  ctx.body = 'about';
});

module.exports = router;
