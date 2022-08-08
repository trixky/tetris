import { nanoid } from 'nanoid';
import NotificationStore from '../../client/stores/notification';
import CurrentRoomStore from '../../client/stores/currentRoom';
import type { BasicError } from 'src/socket';
import { goto } from '$app/navigation';
import Socket from './socket';

export default function leave(callback: (() => void) | undefined = undefined) {
	Socket.emit('room:leave', (deleted: boolean | null, error: BasicError | null | undefined) => {
		if (error != null && error != undefined) {
			NotificationStore.push({ id: nanoid(), message: error.message, error: true });
		} else {
			CurrentRoomStore.set(null);
			NotificationStore.push({
				id: nanoid(),
				message: `room ${deleted ? 'deleted' : 'leaved'}`,
				error: false
			});
			goto('/search');
		}
		if (callback != undefined) callback();
	});
}
