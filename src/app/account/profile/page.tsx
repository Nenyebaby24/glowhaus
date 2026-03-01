"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import Button from "@/components/ui/Button"
import TextInput from "@/components/ui/TextInput"
import Modal from "@/components/ui/Modal"
import { useStore } from "@/store/useStore"

export default function ProfilePage() {
  const {
    user,
    updateUser,
    addresses,
    addAddress,
    updateAddress,
    deleteAddress,
    notifications,
    toggleNotification,
    deleteAccount,
  } = useStore()

  const [activeTab, setActiveTab] = useState("personal")
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // Personal Info Form State
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")

  // Password State
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Address Form State
  const [newAddress, setNewAddress] = useState("")

  /* =========================
     Handlers
  ========================== */

  const handleSavePersonal = () => {
    updateUser({ name, email })
    toast.success("Profile updated")
  }

  const handleAddAddress = () => {
    if (!newAddress.trim()) return
    addAddress(newAddress)
    setNewAddress("")
    toast.success("Address added")
  }

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields required")
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    toast.success("Password updated (demo)")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const confirmDeleteAccount = () => {
    deleteAccount()
    setShowDeleteModal(false)
    toast.success("Account deleted (demo)")
  }

  /* =========================
     UI
  ========================== */

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8">My Profile</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b pb-4 mb-8">
        {[
          { key: "personal", label: "Personal Info" },
          { key: "address", label: "Addresses" },
          { key: "notifications", label: "Notifications" },
          { key: "password", label: "Password" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 transition ${
              activeTab === tab.key
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= PERSONAL INFO ================= */}
      {activeTab === "personal" && (
        <div className="space-y-6 max-w-lg">
          <TextInput
            label="Full Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Button onClick={handleSavePersonal}>Save Changes</Button>
        </div>
      )}

      {/* ================= ADDRESSES ================= */}
      {activeTab === "address" && (
        <div className="space-y-6 max-w-lg">
          <div className="flex gap-3">
            <TextInput
              placeholder="Add new address"
              value={newAddress}
              onChange={(e: any) => setNewAddress(e.target.value)}
            />
            <Button onClick={handleAddAddress}>Add</Button>
          </div>

          <div className="space-y-3">
            {addresses?.map((addr: any) => (
              <div
                key={addr.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <span>{addr.value}</span>
                <Button
                  variant="secondary"
                  onClick={() => deleteAddress(addr.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= NOTIFICATIONS ================= */}
      {activeTab === "notifications" && (
        <div className="space-y-6 max-w-lg">
          {Object.keys(notifications || {}).map((key) => (
            <div
              key={key}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span className="capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>

              <button
                onClick={() => toggleNotification(key)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  notifications[key] ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition ${
                    notifications[key] ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ================= PASSWORD ================= */}
      {activeTab === "password" && (
        <div className="space-y-6 max-w-lg">
          <TextInput
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e: any) => setCurrentPassword(e.target.value)}
          />
          <TextInput
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e: any) => setNewPassword(e.target.value)}
          />
          <TextInput
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />

          <Button onClick={handlePasswordChange}>
            Update Password
          </Button>

          <div className="pt-8 border-t">
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Account
            </Button>
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Confirm Account Deletion</h2>
          <p className="text-gray-600">
            This action cannot be undone. Are you sure?
          </p>
          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmDeleteAccount}>
              Confirm Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}