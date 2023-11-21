import type {Incidence, WorkerData, WorkerInfo} from '@/models/interfaces';
import { IncidenceStatus } from '@/models/interfaces';

export const fakeWorkersDataAttendance: WorkerData[] = [
    {
        name: 'carlos',
        id: '2688',
        department: 'department2',
        attendance: {
            '2023-11-08': [
                { time: '22:00', type: 'entry' },
                { time: '22:30', type: 'exit' }
            ]
        },
    },
    {
        name: 'carlos',
        id: '2688',
        department: 'department1',
        attendance: {
            '2023-11-01': [
                { time: '22:00', type: 'entry' },
                { time: '22:30', type: 'exit' }
            ],
            '2023-11-08': [
                { time: '22:00', type: 'entry' },
                { time: '22:30', type: 'exit' }
            ]
        },
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-01': [
                { time: '22:00', type: 'entry' },
                { time: '22:30', type: 'exit' }
            ],
            '2023-11-02': [
                { time: '05:00', type: 'entry' },
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    },
    {
        name: 'name2',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-01': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-02': [
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    },
    {
        name: 'name3',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-01': { description: 'holy shit'},
            '2023-11-07': { description: 'blackout'},
            '2023-11-02': [
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    },
    {
        name: 'name4',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-01': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-02': [
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-01': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-02': [
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1',
        attendance: {
            '2023-11-02': [
                { time: '05:00', type: 'entry' },
                { time: '06:00', type: 'exit' },
            ],
            '2023-11-03': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-04': [
                { time: '22:00', type: 'entry' },
            ],
            '2023-11-05': [
                { time: '22:00', type: 'entry' },
            ],
        },
    }
];

export const fakeWorkersDataIncidence: WorkerInfo[] = [
    {
        name: 'carlos',
        id: '2688',
        department: 'department2'
    },
    {
        name: 'carlos',
        id: '2688',
        department: 'department1'
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name2',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name3',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name4',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    },
    {
        name: 'name5',
        id: '1239',
        department: 'department1',
    },
    {
        name: 'name1',
        id: '1239',
        department: 'department1'
    }
];


export const fakeIncidencesData: Incidence[] = [
    {
        id: '1',
        status: IncidenceStatus.Pending,
        date: '2023-01-15',
        worker: { id: '123', name: 'Juan Pérez', department: 'Ventas' },
    },
    {
        id: '2',
        status: IncidenceStatus.Approved,
        date: '2023-02-20',
        worker: { id: '456', name: 'María Rodríguez', department: 'Recursos Humanos' },
    },
    {
        id: '3',
        status: IncidenceStatus.Rejected,
        date: '2023-03-10',
        worker: { id: '789', name: 'Carlos González', department: 'Producción' },
    }
];
