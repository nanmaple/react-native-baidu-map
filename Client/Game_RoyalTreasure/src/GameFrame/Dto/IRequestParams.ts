interface IRequestParams {
    /**
     * 请求类型,"Post","Get",
     */
    Type: "Post" | "Get",
    /**
     *  请求地址
     */
    Url: string,
    /**
     * 请求参数
     */
    Params?: any
    /**
     * 请求header
     */
    Header?: any
}