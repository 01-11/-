import instance from "@/api/instance";

export const timestamp = Date.now();
/* ********* 排行榜 ********* */
// 排行榜
export const topList = () => instance.get("/toplist");
// 所有榜单内容摘要
export const topListDetail = () => instance.get("/toplist/detail");
// 歌单详情  #排行榜也是歌单的一种 s:最近收藏者
export const listDetail = (id = "", s = 8) =>
  instance.get(`/playlist/detail?id=${id}&s=${s}`);


/* ********* 歌曲 ********* */
// 获取歌曲详情
export const songDetail = (ids) => instance.get(`/song/detail?ids=${ids}`);
// 获取歌曲歌词
export const songLyric = (id) => instance.get(`/lyric?id=${id}`);
// 获取相似歌单
export const simiPlaylist = (id) => instance.get(`/simi/playlist?id=${id}`);
// 获取相似歌曲
export const simiSong = (id) => instance.get(`/simi/song?id=${id}`);

/* ********* 评论 ********* */
// 评论接口
// id : 资源 id, 如歌曲 id,mv id
// type: 数字 , 资源类型 0: 歌曲 1: mv 2: 歌单 3: 专辑4: 电台5: 视频 6: 动态
// sortType: 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
// cursor: 当sortType为 3 时且页数不是第一页时需传入,值为上一条数据的 time
export const reqComment = ({
  id,
  type,
  pageNo = 1,
  pageSize = 20,
  sortType,
  cursor,
}) => {
  if (sortType === 3 && pageNo !== 1) {
    return instance.get(
      `/comment/new?id=${id}&type=${type}&pageNo=${pageNo}&sortType=${sortType}&cursor=${cursor}&pageSize=${pageSize}`
    );
  } else {
    return instance.get(
      `/comment/new?id=${id}&type=${type}&pageNo=${pageNo}&sortType=${sortType}&pageSize=${pageSize}`
    );
  }
};

/* ********* 歌单 ********* */
//歌单分类
export const getCatlist = () =>
  instance({
    url: "/playlist/catlist",
    method: "get",
  });
// 歌单列表
export const playList = ({ cat = "全部", limit = 50, pageNo = 1 }) => {
  let offset = (pageNo - 1) * limit;
  return instance({
    url: "/top/playlist",
    method: "post",
    params: {
      order: "hot",
      cat,
      limit,
      offset,
    },
  });
};
// 获取歌单详细
export const playlistDetail = (id) =>
  instance.get(`/playlist/detail?id=${id}&s=8`);

export default {
  topList,
  topListDetail,
  listDetail,
  songDetail,
  reqComment,
  getCatlist,
  playList,
  playlistDetail,
  songLyric,
  simiPlaylist,
  simiSong,
};
