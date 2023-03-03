import { ContentCardModel } from "../ContentCard/ContentCard.model";

class GridCardContainerService {
  constructor() {
    this.data = [
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
      new ContentCardModel(
        "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fdiscovercrop-phinf.pstatic.net%2F%2FMjAyMzAzMDJfMjYg%2FMDAxNjc3NzIzODM0MDQx.gor0ziqJXJDdzIntYzBZJg5ZEgOKteWyB08WvM6stHwg.qTGSycAJHKJbJhT3NAbW8tmqMOPAw9NhEGpWi_maY88g.JPEG%2Fimage_374x246.jpg%22&type=nf464_260",
        "나는솔로 13기 순자 회사 알고보니 삼전 광수만큼 엄청난 곳!?",
        {
          image:
            "https://s.pstatic.net/dthumb.phinf/?src=%22http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAxNjEwMjlfMjI3%2FMDAxNDc3NzQ2ODE0NTU0.cHkLuuQqRmNu3ZLxYPpNyz6_1Sy6XlLfuhB_Bfoxt-cg.EWVIvw_nmhzVAefhyP22cGQ1fJaLN4tBkmRc9q-hRhwg.PNG.chesungmin%2Ftom.PNG%22&type=navermain_nf40_40",
          name: "인플루언서",
        }
      ),
    ];
  }
  getData() {
    return this.data;
  }
}

export const gridCardContainerService = new GridCardContainerService();
