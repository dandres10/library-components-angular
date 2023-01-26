import { ElementRef } from "@angular/core"
import { DataType } from "../enums/GlobalEnum"

export interface ITableDTO {
    headers: ITableHeadersDTO[]
    rows: any[]
    configurationTable: IConfigurationTableDTO
}

export interface IConfigurationTableDTO {
    activateTabletMobile: boolean
    elementRef?: ElementRef
    columns?: number
}

export interface ITableHeadersDTO {
    id: number
    value: string | number | null
    hasFilters: boolean
    dataType: DataType
    callBack: Function
}

export interface ITableHeadersMovilDTO {
    headersTitle: ITableHeadersDTO[]
    headersCard: ITableHeadersDTO[]
}

export interface IValueDTO {
    id: number
    value: any
    attribute: any
    dataType: DataType
    keyValue: string
    callBack: Function
}

export interface IRowDTO {
    id: number
    value: IValueDTO[]
}

export interface IRowMovilDTO {
    rowsTitle: IRowDTO[]
    rowsCard: IRowDTO[]
}


