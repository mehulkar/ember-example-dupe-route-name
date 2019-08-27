import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Object.keys(params).reduce((memo, key) => {
        memo.push({ key, value: params[key] })
        return memo;
    }, []);
  }
});
