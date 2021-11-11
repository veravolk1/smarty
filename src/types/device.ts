
export type Device = {
    deviceId: string,
    deviceName: string,
    price: string,
    description: string,
    sprachassistenz: string,
    schnittstellen: string,
    gewicht: string,
    masse: string,
    akku?: string,
    display_size?: string,
    farben: string,
    images: Array<string>
}

export enum DeviceCategory {
    SPEAKER = "Smart Speaker",
    WATCH = "Smart Watch",
    HOME = "Smart Home"
}
