export const workerTasks: { [x: string]: WorkerTasksTypes | string } = {
	EMAIL_SEND: `EMAIL_SEND`,
}

export type WorkerTasksTypes = 'EMAIL_SEND'
