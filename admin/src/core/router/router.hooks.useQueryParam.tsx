import { useLocation } from 'react-router-dom'

export default function useQueryParam() {
	return new URLSearchParams(useLocation().search)
}
