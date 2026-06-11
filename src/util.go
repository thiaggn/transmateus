package main

import (
	"crypto/rand"
	"encoding/binary"
)

func GenerateID() (int64, error) {
	var b [8]byte
	_, err := rand.Read(b[:])
	if err != nil {
		return 0, err
	}

	id := int64(binary.BigEndian.Uint64(b[:]) & 0x7FFFFFFFFFFFFFFF)
	return id, nil
}
