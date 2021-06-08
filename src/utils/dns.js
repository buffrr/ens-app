// zone file TXT value format
import bns from 'bns'

export function normalizeTXT(txt) {
  const t = txt.trim()
  if (t === '') return '"' + txt + '"'

  if (t[0] !== '"' || t[t.length - 1] !== '"') {
    const escape = txt.replace(/"/g, '\\"')
    return '"' + escape + '"'
  }

  return txt
}

export function strRecord(name, ttl, type, value) {
  if (type === 'TXT' && value !== '') value = normalizeTXT(value)
  if (type === 'CNAME' && value !== '') value = bns.util.fqdn(value)

  return name + ' ' + ttl + ' IN ' + type + ' ' + value
}
