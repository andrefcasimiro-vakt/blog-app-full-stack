import { WorkerTasksTypes } from '../worker/worker.tasks'

export interface QueueTaskPayload<T> {
	type: WorkerTasksTypes
	payload: T
}
