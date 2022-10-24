declare type FileMessage = {
    url: string;
    type: string;
    name: string;
};
declare type AnimationMessage = {
    url: string;
    type: string;
};
declare type AudioMessage = {
    url: string;
    type: string;
    duration: number;
};
declare type PickerMessage = {
    id: string;
    text: string;
    choices: PickerMessageChoices[];
};
declare type PickerMessageChoices = {
    value: string;
    label: string;
    selected: boolean;
};
declare type FieldMessage = {
    id: string;
    text: string;
    explain: string;
};
declare class CrispMessage {
    private parent;
    constructor(crisp: Crisp);
    send(type: string, content: string | FileMessage | AnimationMessage | AudioMessage): void;
    sendText(content: string): void;
    sendFile(content: FileMessage): void;
    sendAnimation(content: AnimationMessage): void;
    sendAudio(content: AudioMessage): void;
    show(type: string, content: string | FileMessage | AnimationMessage | AudioMessage | FieldMessage | PickerMessage): void;
    showText(content: string): void;
    showFile(content: FileMessage): void;
    showAnimation(content: AnimationMessage): void;
    showAudio(content: AudioMessage): void;
    showPicker(content: PickerMessage): void;
    showField(content: FieldMessage): void;
    markAsRead(): void;
    onMessageSent(callback: Function): void;
    onMessageReceived(callback: Function): void;
    onMessageComposeSent(callback: Function): void;
    onMessageComposeReceive(callback: Function): void;
}

declare type CompanyData = {
    url?: string;
    description?: string;
    employment?: CompanyDataEmployment | string[];
    geolocation?: CompanyDataGeolocation | string[];
};
declare type CompanyDataEmployment = {
    title: string;
    role?: string;
};
declare type CompanyDataGeolocation = {
    country: string;
    city?: string;
};
declare class CrispUser {
    private parent;
    constructor(crisp: Crisp);
    setNickname(nickname: string): void;
    setEmail(email: string, hmac?: string): void;
    setPhone(phone: string): void;
    setAvatar(avatar: string): void;
    setCompany(name: string, data: CompanyData): void;
    getEmail(): string | null;
    getPhone(): string | null;
    getNickname(): string | null;
    getAvatar(): string | null;
    getCompany(): object | null;
    onEmailChanged(callback: Function): void;
    onPhoneChanged(callback: Function): void;
    onNicknameChanged(callback: Function): void;
    onAvatarChanged(callback: Function): void;
}

declare class CrispTrigger {
    private parent;
    constructor(crisp: Crisp);
    run(name: string): void;
}

declare enum EventsColors {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Pink = "pink",
    Brown = "brown",
    Grey = "grey",
    Black = "black"
}
declare class CrispSession {
    private parent;
    constructor(crisp: Crisp);
    reset(reload?: boolean): void;
    setSegments(segments: string[], overwrite: boolean): void;
    setData(data: object): void;
    pushEvent(name: string, data?: object, color?: EventsColors): void;
    getData(key: string): string | boolean | number | undefined;
    getIdentifier(): string | null;
    onLoaded(callback: Function): void;
    private isValidDataValue;
}

declare class CrispChat {
    private parent;
    constructor(crisp: Crisp);
    show(): void;
    hide(): void;
    open(): void;
    close(): void;
    unreadCount(): number;
    isChatOpened(): boolean;
    isVisible(): boolean;
    onChatInitiated(callback: () => void): void;
    onChatOpened(callback: () => void): void;
    onChatClose(callback: () => void): void;
}

declare global {
    var $crisp: any;
    var CRISP_WEBSITE_ID: string;
    var CRISP_TOKEN_ID: string;
    var CRISP_RUNTIME_CONFIG: any;
    var CRISP_COOKIE_DOMAIN: string;
    var CRISP_COOKIE_EXPIRE: number;
}
declare type Options = {
    autoload?: boolean;
    tokenId?: string;
    sessionMerge?: boolean;
    cookieDomain?: string;
    cookieExpire?: number;
    lockMaximized?: boolean;
    lockFullview?: boolean;
};
declare enum ChatboxColors {
    Default = "default",
    Amber = "amber",
    Black = "black",
    Blue = "blue",
    BlueGrey = "blue_grey",
    LightBlue = "light_blue",
    Brown = "brown",
    Cyan = "cyan",
    Green = "green",
    LightGreen = "light_green",
    Grey = "grey",
    Indigo = "indigo",
    Orange = "orange",
    DeepOrange = "deep_orange",
    Pink = "pink",
    Purple = "purple",
    DeepPurple = "deep_purple",
    Red = "red",
    Teal = "teal"
}
declare enum ChatboxPosition {
    Left = "left",
    Right = "right"
}
declare class Crisp {
    private websiteId;
    private autoload?;
    private tokenId?;
    private sessionMerge?;
    private cookieDomain?;
    private cookieExpire?;
    private lockFullview?;
    private lockMaximized?;
    private injected;
    chat: CrispChat;
    session: CrispSession;
    user: CrispUser;
    message: CrispMessage;
    trigger: CrispTrigger;
    constructor();
    configure(websiteId: string, options?: Options): void;
    load(): void;
    setTokenId(tokenId: string): void;
    setZIndex(zIndex: number): void;
    setColorTheme(color: ChatboxColors): void;
    setHideOnAway(enabled: boolean): void;
    setHideOnMobile(enabled: boolean): void;
    setPosition(position: ChatboxPosition): void;
    setAvailabilityTooltip(enabled: boolean): void;
    setVacationMode(enabled: boolean): void;
    muteSound(mute: boolean): void;
    toggleOperatorCount(enabled: boolean): void;
    createSingletonIfNecessary(): void;
    autoInjectIfNecessasy(): void;
    isCrispInjected(): boolean;
    private deferredLoading;
}
declare const singleton: Crisp;

export { AnimationMessage, AudioMessage, CompanyData, CompanyDataEmployment, CompanyDataGeolocation, singleton as Crisp, Crisp as CrispClass, EventsColors, FieldMessage, FileMessage, PickerMessage, PickerMessageChoices };
