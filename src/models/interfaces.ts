export interface CheckIn {
    time: string;
    type: 'entry' | 'exit';
}
export interface Incident {
    description: string;
}
interface AttendanceRecord {
    [date: string]: CheckIn[] | Incident;
}
export interface WorkerData extends WorkerInfo {
    attendance: AttendanceRecord;
}

export interface WorkerInfo {
    name: string;
    id: string;
    department?: string;
}

export enum IncidenceStatus {
    Pending = 'pendiente',
    Approved = 'aprobada',
    Rejected = 'rechazada',
}

export interface Incidence {
    id: string;
    status: IncidenceStatus;
    date: string;
    worker: WorkerInfo;
}
