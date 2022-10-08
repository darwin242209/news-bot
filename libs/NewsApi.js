NewsApiClient newsApiClient = new NewsApiClient("b846ca1b4f1c42608777efebcb5319d6");

// /v2/everything
newsApiClient.getEverything(
  new EverythingRequest.Builder()
          .q("trump")
          .build(),
  new NewsApiClient.ArticlesResponseCallback() {
      @Override
      public void onSuccess(ArticleResponse response) {
          System.out.println(response.getArticles().get(0).getTitle());
      }

      @Override
      public void onFailure(Throwable throwable) {
          System.out.println(throwable.getMessage());
      }
  }
);
        
// /v2/top-headlines
newsApiClient.getTopHeadlines(
  new TopHeadlinesRequest.Builder()
    .q("bitcoin")
    .language("en")
    .build(),
  new NewsApiClient.ArticlesResponseCallback() {
    @Override
    public void onSuccess(ArticleResponse response) {
      System.out.println(response.getArticles().get(0).getTitle());
    }

    @Override
    public void onFailure(Throwable throwable) {
      System.out.println(throwable.getMessage());
    }
  }
);
        
// /v2/top-headlines/sources
newsApiClient.getSources(
  new SourcesRequest.Builder()
    .language("en")
    .country("us")
    .build(),
  new NewsApiClient.SourcesCallback() {
    @Override
    public void onSuccess(SourcesResponse response) {
        System.out.println(response.getSources().get(0).getName());
    }

    @Override
    public void onFailure(Throwable throwable) {
      System.out.println(throwable.getMessage());
    }
  }
);
