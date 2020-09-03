import like from '../../assets/img/reactions/like.webp';
import love from '../../assets/img/reactions/love.webp';
import haha from '../../assets/img/reactions/haha.webp';
import wow from '../../assets/img/reactions/wow.webp';

const icons = {
  facebook: {
    like,
    love,
    haha,
    wow
  }
}

export default {
  find: (scope, name) => {
    return icons[scope] && icons[scope][name] || 'n/a'
  },
}
