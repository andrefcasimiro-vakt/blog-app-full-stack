import { WorkerTasksTypes, workerTasks } from '../worker/worker.tasks'

export interface QueueTaskPayload<Payload> {
	type: WorkerTasksTypes
	payload: Payload
}
