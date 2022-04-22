export declare class MinecraftSkinType {
    private static hasTransparency;
    private static isAreaBlack;
    private static isAreaWhite;
    private static computeSkinScale;
    private static copyImage;
    private static convertSkinTo1_8;
    private static fixOpaqueSkin;
    private static loadSkinToCanvas;
    /**
     * Detect skin model type
     * @param path Skin file patch
     * @returns true if slim-skin or false
     */
    static isSlim(path: string): boolean;
}
